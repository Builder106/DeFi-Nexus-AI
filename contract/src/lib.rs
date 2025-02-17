use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{env, near_bindgen, AccountId, Balance};

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct DecentraTrader {
    owner: AccountId,
    total_deposit: Balance,
}

impl Default for DecentraTrader {
    fn default() -> Self {
        env::panic_str("Contract not initialized. Please call new(owner: AccountId) to initialize.");
    }
}

#[near_bindgen]
impl DecentraTrader {
    #[init]
    pub fn new(owner: AccountId) -> Self {
        Self {
            owner,
            total_deposit: 0,
        }
    }

    #[payable]
    pub fn deposit(&mut self) {
        let deposit_amount = env::attached_deposit();
        self.total_deposit += deposit_amount;
        env::log_str(&format!("Received deposit of {} yoctoNEAR", deposit_amount));
    }

    pub fn get_total_deposit(&self) -> Balance {
        self.total_deposit
    }

    pub fn execute_order(&self, order: String) -> String {
        let result = format!("Executed order: {} with available funds: {}", order, self.total_deposit);
        env::log_str(&result);
        result
    }
} 