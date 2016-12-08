public class AccountsController {
    @AuraEnabled
    public static List<Account> getAccounts(){
        return [SELECT Name, Type, NumberofEmployees, Phone FROM Account LIMIT 5];
    }
}