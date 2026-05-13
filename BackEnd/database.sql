CREATE DATABASE IF NOT EXISTS bank;
USE bank;

CREATE TABLE IF NOT EXISTS accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    currency VARCHAR(3) DEFAULT 'USD'
);

CREATE TABLE IF NOT EXISTS transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    account_id INT,
    type ENUM('deposit', 'withdrawal') NOT NULL,
    amount DECIMAL(15, 2) NOT NULL,
    description TEXT,
    balance_after DECIMAL(15, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (account_id) REFERENCES accounts(id)
);

-- Insert a default account
INSERT INTO accounts (id, currency) VALUES (1, 'USD') ON DUPLICATE KEY UPDATE id=id;
