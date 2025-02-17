import os
import subprocess


def run_command(command):
    print(f"Executing: {command}")
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    else:
        print(f"Output: {result.stdout}")


def main():
    near_account = os.environ.get("NEAR_ACCOUNT")
    contract_id = os.environ.get("CONTRACT_ID", "decentratrader.testnet")

    if not near_account:
        print("Error: Please set the NEAR_ACCOUNT environment variable.")
        return

    # Deposit funds: using 1 NEAR as deposit amount
    print("Depositing funds into the contract...")
    deposit_cmd = f'near call {contract_id} deposit --accountId {near_account} --amount 1'
    run_command(deposit_cmd)

    # Execute an order: For example, buying 1 NEAR
    print("Executing trade order...")
    order = "buy 1 NEAR"
    # Pass the order as a JSON string parameter
    execute_cmd = f'near call {contract_id} execute_order "{{\"order\":\"{order}\"}}" --accountId {near_account}'
    run_command(execute_cmd)


if __name__ == "__main__":
    main() 