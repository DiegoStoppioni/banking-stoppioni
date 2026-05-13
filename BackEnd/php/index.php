<?php
// CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

header("Content-Type: application/json");

// Debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . '/controllers/TransactionsController.php';
require_once __DIR__ . '/controllers/BalanceController.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = trim($uri, '/');
$parts = explode('/', $uri);

$method = $_SERVER['REQUEST_METHOD'];
$transactions = new TransactionsController();
$balance = new BalanceController();

try {
    // Rotta di test rapida: apri http://localhost:8080/ping nel browser
    if ($uri == 'ping') {
        echo json_encode(["status" => "ok", "message" => "Backend is alive"]);
        exit;
    }

    // Routing semplificato (cerca solo l'ultima parte dell'URL)
    if (in_array('balance', $parts) && !in_array('convert', $parts)) {
        $transactions->getBalance(1);
    } 
    else if (in_array('transactions', $parts) && count($parts) == 3) {
        $transactions->getMovements(1);
    }
    else if (in_array('deposits', $parts)) {
        $transactions->pushDeposit(1);
    }
    else if (in_array('withdrawals', $parts)) {
        $transactions->pushWithDrawal(1);
    }
    else if (in_array('fiat', $parts)) {
        $balance->convertToFiat(1);
    }
    else if (in_array('crypto', $parts)) {
        $balance->convertToCrypto(1);
    }
    else {
        http_response_code(404);
        echo json_encode(["error" => "Not found", "uri" => $uri]);
    }
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
