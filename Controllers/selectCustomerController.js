 angular.module("BankModule", []).controller("selectCustomerController", function ($scope) {

     $scope.Customers = [
         {

             "S_No": "1",
             "Beneficiary_Acc_No": "420934037092302",
             "Beneficiary_Name": "K BALAMURUGAN",
             "IFSC_Code": "IBON001250",
             "Available_Amount": 500000,
             "Branch": "Kerala",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "2",
             "Beneficiary_Acc_No": "424386330076686",
             "Beneficiary_Name": "ROSHAN V",
             "IFSC_Code": "IBONO04522",
             "Available_Amount": 750000,
             "Branch": "Punjab",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "3",
             "Beneficiary_Acc_No": "104350472783319",
             "Beneficiary_Name": "PANDIRI RAJASHEKARA",
             "IFSC_Code": "CIUB007794",
             "Available_Amount": 250000,
             "Branch": "Goa",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "4 ",
             "Beneficiary_Acc_No": "441437323080708",
             "Beneficiary_Name": "DUDEKULU ILIYAAS",
             "IFSC_Code": "HDFC0011066",
             "Available_Amount": 2500000,
             "Branch": "Punjab",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "5",
             "Beneficiary_Acc_No": "452309267046294",
             "Beneficiary_Name": "AATHIMANGALESHVARAN A",
             "IFSC_Code": "IBON0014338",
             "Available_Amount": 125500,
             "Branch": "Tripura",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "6",
             "Beneficiary_Acc_No": "453354047052483",
             "Beneficiary_Name": "HARSH PARATE",
             "IFSC_Code": "CIUB0017610",
             "Available_Amount": 546000,
             "Branch": "Tamil Nadu",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "7 ",
             "Beneficiary_Acc_No": "454825200052803",
             "Beneficiary_Name": "SATISH SHAKYA",
             "IFSC_Code": "INDB0020882",
             "Available_Amount": 232100,
             "Branch": "Tripura",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "8",
             "Beneficiary_Acc_No": "463254235076154",
             "Beneficiary_Name": "AKASH PRAJAPATH",
             "IFSC_Code": "HDFC0024154",
             "Available_Amount": 123900,
             "Branch": "Punjab",
             "Name_Comparison_Flag": "AKASH PRAJAPAT  corrected as AKASH PRAJAPATH .",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "9",
             "Beneficiary_Acc_No": "463922339071681",
             "Beneficiary_Name": "VIKRANT KUMAR BHATNAGAR",
             "IFSC_Code": "INDB0027426",
             "Available_Amount": 125500,
             "Branch": "Goa",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "10 ",
             "Beneficiary_Acc_No": "468945202069674",
             "Beneficiary_Name": "GOPAL KRISHNA SHARMA",
             "IFSC_Code": "IBON0030698",
             "Available_Amount": 5003000,
             "Branch": "Kerala",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "11",
             "Beneficiary_Acc_No": "477807340034379",
             "Beneficiary_Name": "ATIK KAHAN",
             "IFSC_Code": "INDB0033970",
             "Available_Amount": 1585850,
             "Branch": "Gujarat",
             "Name_Comparison_Flag": "ATIQ KAHAN  corrected as ATIK KAHAN .",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "12",
             "Beneficiary_Acc_No": "105066680211851",
             "Beneficiary_Name": "MAHENDRA SINGH GAHLOT",
             "IFSC_Code": "INDB0037242",
             "Available_Amount": 120000,
             "Branch": "Tamil Nadu ",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "13",
             "Beneficiary_Acc_No": "509142178085215",
             "Beneficiary_Name": "KARTHICK M",
             "IFSC_Code": "CIUBO040514",
             "Available_Amount": 2530000,
             "Branch": "Tamil Nadu ",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "14",
             "Beneficiary_Acc_No": "511107072136307",
             "Beneficiary_Name": "SURAJ KUMAR MALAKAR",
             "IFSC_Code": "HDFC0043786",
             "Available_Amount": 125000,
             "Branch": "Tripura",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "15",
             "Beneficiary_Acc_No": "520512089091660",
             "Beneficiary_Name": "SADHU RAM",
             "IFSC_Code": "HDFC0047058",
             "Available_Amount": 250000,
             "Branch": "Tamil Nadu",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "16",
             "Beneficiary_Acc_No": "532550338096032",
             "Beneficiary_Name": "PURAN SINGH THAPA",
             "IFSC_Code": "INDB0050330",
             "Available_Amount": 850000,
             "Branch": "Tripura",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "17",
             "Beneficiary_Acc_No": "543356012128165",
             "Beneficiary_Name": "PRADEEP PARMAR",
             "IFSC_Code": "CIUBOO53602",
             "Available_Amount": 920000,
             "Branch": "Tamil Nadu",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "18",
             "Beneficiary_Acc_No": "547611346137194",
             "Beneficiary_Name": "SAKIKUMAR M",
             "IFSC_Code": "INDB0056874",
             "Available_Amount": 2500000,
             "Branch": "Punjab",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "19",
             "Beneficiary_Acc_No": "551964306124489",
             "Beneficiary_Name": "SHASBAJKHAN",
             "IFSC_Code": "IBON0060146",
             "Available_Amount": 987400,
             "Branch": "Gujarat",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "20",
             "Beneficiary_Acc_No": "576203250101952",
             "Beneficiary_Name": "ANBUKUMARAN",
             "IFSC_Code": "CIUB0063418",
             "Available_Amount": 85000,
             "Branch": "Goa",
             "Name_Comparison_Flag": "ANBUKUMARANB  corrected as ANBUKUMARAN .",
             "TransactionStatus":"Transaction Fail"
        },
         {

             "S_No": "21",
             "Beneficiary_Acc_No": "1010101010",
             "Beneficiary_Name": "Virtusa",
             "IFSC_Code": "IBON0060146",
             "Available_Amount": 10000,
             "Branch": "Gujarat ",
             "TransactionStatus":""

        },
         {

             "S_No": "22",
             "Beneficiary_Acc_No": "5050505050",
             "Beneficiary_Name": "IFS",
             "IFSC_Code": "IBON0060146",
             "Available_Amount": 980000,
             "Branch": "Goa ",
             "TransactionStatus":""
        }
    ];

     //initialize the transaction

     $scope.transaction = {

         'Amount': null,
         'Type': null,
         'traAccNo': null

     };


     $scope.radio = {
         'depoType': null
     }

     $scope.newCustomer = {};
     var deduct = false;
     var depoStatus = true;
     var accError = false;
     var balError = false;
     var index = 0;
     $scope.errorvalue = true;


     $scope.proceedTransaction = function (Customer, depoType) {


         depoStatus=true;
         
         if ($scope.transaction.Amount != 0 && $scope.transaction.Amount > 0) {


             if ($scope.transaction.Type == 'deposit') {


                 if (depoType == 'anotherAccount') {


                     if ($scope.transaction.traAccNo != null) {

                         

                         for (var i = 0; i < $scope.Customers.length; i++) {

                             if ($scope.Customers[i].Beneficiary_Acc_No.trim() == $scope.transaction.traAccNo.trim()) {

                                 console.log('No Acc Error');
                                 accError = true;

                                 //check employee amount is larger thatn requested amount
                                 if ($scope.Customers[i].Available_Amount > $scope.transaction.Amount) {

                                     balError = true;
                                     deduct = true;
                                     //current index
                                     index = i;
                                 }



                             }

                         }

                         //print errors

                         if (!accError) {

                             depoStatus = false;

                             swal({
                                 title: "Enter Correct Transaction Account Number",
                                 type: "error",
                                 timer: 2000,
                                 showConfirmButton: false
                             }, function () {
                                 swal.close();
                             });

                         } else if (!balError) {
                             depoStatus = false;

                             swal({
                                 title: "Employee account balance is insufficient",
                                 type: "error",
                                 timer: 2000,
                                 showConfirmButton: false
                             }, function () {
                                 swal.close();
                             });
                             
                             
                            var val = confirm("Please try again later.");
                     
                             if(val){

                                 $('#myModal').modal('toggle');

                             }
                         }




                     } else {

                         depoStatus = false;

                         swal({
                             title: "Enter employee account number in order to do transaction",
                             type: "error",
                             timer: 1250,
                             showConfirmButton: false
                         }, function () {
                             swal.close();
                         });
                         
                         $('#myModal').modal('toggle');

                     }

                 }


                 if (depoStatus) {

                     //show message

                     var val = confirm("Rs " + $scope.transaction.Amount + ".00 amount " + $scope.transaction.Type + " To account");


                     if (val) {

                         if (deduct) {
                             //reduce the salary from the employee account
                             $scope.Customers[index].Available_Amount = $scope.Customers[index].Available_Amount - $scope.transaction.Amount;
                         }

                         //add amount to current amount
                         Customer.Available_Amount = Customer.Available_Amount + $scope.transaction.Amount;

                         //update
                         for (var i = 0; i < $scope.Customers.length; i++) {

                             if (Customer.Beneficiary_Acc_No == $scope.Customers[i].Beneficiary_Acc_No) {

                                 $scope.Customers[i].Available_Amount = Customer.Available_Amount;

                                 $scope.Customers[i].TransactionStatus='Transaction Success';
                             }

                         }


                         //print the message
                         swal({
                             title: "Transaction successfully completed.",
                             type: "success",
                             timer: 1250,
                             showConfirmButton: false
                         }, function () {
                             swal.close();
                         });


                         //clean data
                         $scope.transaction = {

                             'Amount': null,
                             'Type': null,
                             'traAccNo': null
                         };




                         $('#myModal').modal('toggle');


                     } else {

                         //clean data
                         $scope.transaction = {

                             'Amount': null,
                             'Type': null,
                             'traAccNo': null
                         };

                         

                     }
                     
                     depoStatus=false;
                     accError=false;
                     balError=false;
                     
                 }




             } else {


                 //check requested ammount is smaller than current amount
                 if (Customer.Available_Amount > $scope.transaction.Amount) {


                     //show message
                     var val = confirm("Rs " + $scope.transaction.Amount + ".00 amount " + $scope.transaction.Type + " from account");

                     if (val) {

                         //reduce the amount from current salary
                         Customer.Available_Amount = Customer.Available_Amount - $scope.transaction.Amount;

                         //update
                         for (var i = 0; i < $scope.Customers.length; i++) {

                             if (Customer.Beneficiary_Acc_No == $scope.Customers[i].Beneficiary_Acc_No) {

                                 $scope.Customers[i].Available_Amount = Customer.Available_Amount;

                             }

                         }




                         // swal("Transaction Successful", "Transaction successfully completed.", "success");

                         //print the message
                         swal({
                             title: "Transaction successfully completed.",
                             type: "success",
                             timer: 1250,
                             showConfirmButton: false
                         }, function () {
                             swal.close();
                         });


                         //clean data
                         $scope.transaction = {

                             'Amount': null,
                             'Type': null,
                             'traAccNo': null
                         };


                         $('#myModal').modal('toggle');



                     } else {

                         //clean data
                         $scope.transaction = {

                             'Amount': null,
                             'Type': null,
                             'traAccNo': null
                         };



                     }






                 } else {

                     $scope.errorvalue = false;

                     swal({
                         title: "Balance is insufficient",
                         type: "error",
                         timer: 1250,
                         showConfirmButton: false
                     }, function () {
                         swal.close();
                     });
                     
                     
                     var val = confirm("Please try again later.");
                     
                     if(val){
                        
                         $('#myModal').modal('toggle');
                     
                     }
                     
                     
                 }

             }


         } else {

             swal({
                 title: "Please fill the transaction data",
                 type: "error",
                 timer: 1250,
                 showConfirmButton: false
             }, function () {
                 swal.close();
             });

            var val = confirm("Please try again later.");
                     
                     if(val){
                        
                         $('#myModal').modal('toggle');
                     
                     }
         }





     }






     $scope.claerData = function () {

         $scope.transaction = {
             'Amount': null,
             'Type': null,
             'traAccNo': null
         };

         $scope.depoType = null;

     }


     //create customer object

     $scope.transactionPage = function (customer) {

         $scope.newCustomer = {
             'S_No': customer.S_No,
             'Beneficiary_Acc_No': customer.Beneficiary_Acc_No,
             'Beneficiary_Name': customer.Beneficiary_Name,
             'IFSC_Code': customer.IFSC_Code,
             'Available_Amount': customer.Available_Amount,

         }

         $scope.transaction = {

             'traAccNo': customer.EmployeeAccNo

         }

     }


     //    $scope.closeModal = function(){
     //       $uibModalInstance.close();
     //    }

     $scope.download = function () {
         
         
         $scope.savedJSON = angular.toJson($scope.Customers, true);
         var blob = new Blob([$scope.savedJSON], {
             type: "application/json;charset=utf-8;"
         });
         var downloadLink = document.createElement('a');
         downloadLink.setAttribute('download', 'CustomerDataJSON.txt');
         downloadLink.setAttribute('href', window.URL.createObjectURL(blob));
         downloadLink.click();
         
     }


 });