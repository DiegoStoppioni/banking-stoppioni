<?php

class TransactionsController
{
  private function getConnection(){
    return mysqli_connect('localhost', 'root', '', 'bank');
  }

  public function getBalance($id){
    $db = $this->getConnection();
    // Calcola il saldo totale come somma algebrica per sicurezza
    $query = "SELECT (SELECT IFNULL(SUM(amount),0) FROM transactions WHERE account_id = $id AND type = 'deposit') - 
                      (SELECT IFNULL(SUM(amount),0) FROM transactions WHERE account_id = $id AND type = 'withdrawal') as balance_after"; 
    $result = mysqli_query($db, $query);
    $movements = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($movements);
  }

  public function getMovements($id){
    $db = $this->getConnection();
    $query = "SELECT id, type, amount, description, created_at 
              FROM transactions 
              WHERE account_id = $id 
              ORDER BY created_at DESC;";
    $result = mysqli_query($db, $query);
    $movements = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($movements);
  }

  public function getMovementDetail($idA, $idT){
    $db = $this->getConnection();
    $idA = (int)$idA;
    $idT = (int)$idT;
    $query = "SELECT * 
    FROM transactions 
    WHERE id = $idT AND account_id = $idA;";
    $result = mysqli_query($db, $query);
    $movement = mysqli_fetch_assoc($result);
    if(!$movement){
        http_response_code(404);
        echo json_encode(["error" => "Not found"]);
        return;
    }
    echo json_encode($movement);
  }

  public function pushDeposit($idA){
    $db = $this->getConnection();
    if (!$db) {
        http_response_code(500);
        echo json_encode(["error" => "Connection failed: " . mysqli_connect_error()]);
        return;
    }
    $data = json_decode(file_get_contents('php://input'), true);
    $amount = $data['amount'] ?? 0;
    $description = $data['description'] ?? '';
    $qSaldo = "SELECT (SELECT IFNULL(SUM(amount),0) FROM transactions WHERE account_id = $idA AND type = 'deposit') - 
                      (SELECT IFNULL(SUM(amount),0) FROM transactions WHERE account_id = $idA AND type = 'withdrawal') as saldo";
    $resSaldo = mysqli_query($db, $qSaldo);
    if (!$resSaldo) {
        http_response_code(500);
        echo json_encode(["error" => "Error SQL balance: " . mysqli_error($db)]);
        return;
    }
    $row = mysqli_fetch_assoc($resSaldo);
    $currentBalance = $row['saldo'] ?? 0;
    $newBalance = $currentBalance + $amount;
    $query = "INSERT INTO transactions (account_id, type, amount, description, balance_after) 
              VALUES ($idA, 'deposit', $amount, '$description', $newBalance)";
    if (!mysqli_query($db, $query)) {
        http_response_code(500);
        echo json_encode(["error" => "Error SQL Insert: " . mysqli_error($db)]);
        return;
    }
    http_response_code(201);
    echo json_encode(["message" => "Success!", "balance" => $newBalance]);
  }

  public function pushWithDrawal($id){
    $db = $this->getConnection();
    $data = json_decode(file_get_contents('php://input'), true);
    $amount = $data['amount'] ?? 0;
    $description = $data['description'] ?? '';
    if ($amount <= 0) {
        http_response_code(400);
        echo json_encode(["error" => "Importo non valido"]);
        return;
    }
    $query2 = "SELECT (SELECT IFNULL(SUM(amount),0) FROM transactions WHERE account_id = $id AND type = 'deposit') - 
                      (SELECT IFNULL(SUM(amount),0) FROM transactions WHERE account_id = $id AND type = 'withdrawal') as saldo";
    $res = mysqli_query($db, $query2);
    $currentBalance = mysqli_fetch_assoc($res)['saldo'];
    if ($amount > $currentBalance) {
        http_response_code(400);
        echo json_encode(["error" => "Insufficient balance"]);
        return;
    }
    $newBalance = $currentBalance - $amount;
    $query = "INSERT INTO transactions (account_id, type, amount, description, balance_after) 
              VALUES ($id, 'withdrawal', $amount, '$description', $newBalance)";
    mysqli_query($db, $query);
    http_response_code(201);
    echo json_encode(["message" => "Withdrawal made", "balance" => $newBalance]);
  }

  public function deleteMovement($idA, $idT){
    $db = $this->getConnection();
    $checkQuery = "SELECT id FROM transactions WHERE account_id = $idA ORDER BY created_at DESC LIMIT 1";
    $res = mysqli_query($db, $checkQuery);
    $row = mysqli_fetch_assoc($res);
    $lastId = $row['id'] ?? null;
    if ($idT != $lastId) {
        http_response_code(403);
        echo json_encode(["error" => "You can just delete the last transaction"]);
        return;
    }
    $query = "DELETE FROM transactions WHERE id = $idT";
    mysqli_query($db, $query);
    echo json_encode(["message" => "Movement deleted"]);
  }
}
