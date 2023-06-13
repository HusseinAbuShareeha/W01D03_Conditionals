// Pulse Check

// 1
if (10 <= 10){
}

// 2
if  (5 > 3) {
}

// 3
if (5 > 10){
}
else {
}

// 4
if (2 < 3 && 7 > 10){
}

// 5
if ("hello" === "hello"){
}
//********************************************************************************************************************************************************************************************** */
/*
true && true && false;                                 false 

true || (true && false);                               true

5 === 2 || 1 < 10;                                      true 

(!false && true) || (!true && true);                    true 

*/ //******************************************************************************************************************************************************************************* */ */const legalAge = function (age) {
    const legalAge = function (age) {
        if (age >= 18) {
            return true }
            else {   
            return false 
            }
      };
      
      legalAge(20); // => true
      legalAge(18); // => true
      legalAge(17); // => false
      //*********************************************************************************************************************************************************************************
      const isItMyName = function (name) {
        const myName = "hussein" ;
        if ( name === myName) {
            return true 
        }  else {
            return false
            }
        }
      
      
      // the following output depends on the assumption that your name is `John`
      isItMyName("Mark"); // => false
      isItMyName("Sarah"); // => false
      isItMyName("John"); // => true
      //*********************************************************************************************************************************************************************** */
      const positiveOrNegative = function (number) {
      if ( number > 0 ) {
        console.log( "positive number")
      }
     else if ( number < 0 ){
        console.log( "negative number")
     }
     else {
        console.log( "netural number ")
     }
      };
      
      positiveOrNegative(10); // => 10 is positive
      positiveOrNegative(-10); // => -10 is negative
      positiveOrNegative(0); // => 0 is neither positive nor negative
      // **************************************************************************************************************************************************************************

      // you could use the `toLowerCase` string methods to convert a string into lower case
      //"HeLlO wOrlD".toLowerCase(); // => "hello world"

      // you could use the `toUpperCase`string methods to convert a string into upper case
      //"HeLlO wOrlD".toUpperCase(); // => "HELLO WORLD"

       const toLowerOrUpperCase = function (string, strCase) {
        if  ( strCase === "lower"){
            console.log(string.toLowerCase)
        }
        else if   ( strCase === "upper"){
            console.log(string.toUpperCase)
        }
            else {
                console.log( "string case must be lower or upper try again ")
            }
      
        }

            toLowerOrUpperCase("HELLO WORLD", "lower"); // => "hello world"
            toLowerOrUpperCase("my name is john", "upper"); // => "MY NAME IS JOHN"
            toLowerOrUpperCase("my name is john", "mixed"); // => "String case must be lower or upper"
        // ***************************************************************************************************************************************************************************************    
  
        // one handy string property `length` is used to return the length of a string
          "hello".length; // => 5
          "hello world".length; // => 11 (notice how the space in between the words counted as a character)

         // - words less than 5 are considered short words
         // - words in between 5 and 8 are considered medium words
         // - words in between 9 and 13 are considered long words
         // - words more than 13 are considered very long words

          const howLong = function (word) {
           if ( word.length < 5 ) {
            console.log( "short word ")
           } else if ( word.legnth >= 5 || word.length <= 8 ){
            console.log( "medium word ")
           }
           else if ( word.legnth >= 9 || word.length <= 13 ){
            console.log( "long word ")
           }
           else {
            console.log( "very long word ")
           }

           };
         howLong("and"); // => "short"
         howLong("function"); // => "medium"
         howLong("corresponding"); // => "long"
         howLong("Supercalifragilisticexpialidocious"); // => "very long"
         // **************************************************************************************************************************************
          // since strings store a series of characters in an ordered way
         // we could use the index of the character to access the character in the string
          // each character in the string has its own unique identifying number (index) 
         // the index value starts at zero and for every letter that is added after the first one, the index will be incremented by one

             "hello"[0]; // => h
             "hello"[1]; // => e
             "hello"[2]; // => l
             "hello"[3]; // => l
            "hello"[4]; // => o

           // write a function `startsWith` that accept two string arguments `string`, `character` and returns true if the string
           // starts with that character. It doesn't matter if it's lowercase or uppercase

            const startsWith = function (string, character) {
           if ( string [0] === character){
            console.log( true )
           } else {
            console.log( false)
           }
           };
          startsWith("Hello", "h"); // => true
          startsWith("hello", "h"); // => true   /// there is problem here 
          startsWith("hello", "a"); // => false
          startsWith("World", "h"); // => false
          startsWith("World", "a"); // => false
          // ****************************************************************************************************************************************
          const endsWith = function (string, character) {
            if ( string [4] === character ){
                console.log( true)
                
             } else {
                    console.log( false)
                }
            
            }
          
          endsWith("Hello", "o"); // => true
          endsWith("Hello", "O"); // => true
          endsWith("hellO", "o"); // => true
          endsWith("World", "h"); // => false
          endsWith("World", "a"); // => false
          endsWith("World", "c"); // => false
          // **********************************************************************************************************************************************
          
             
             const deposit = function (amount) {
             if ( amount > 0 && typeof amount === "number"){
                console.log( amount )
                return amount 
             } else if (amount< 0 && typeof amount === "number") {
                console.log( "Please enter a positive number")

             } else {
                console.log( "Please enter a number")

             }
             };

              deposit(100); // => 100
              deposit(250); // => 250
              deposit(-100); // => "Please enter a positive number"
              deposit("100"); // => "Please enter a number"
              // ********************************************************************************************************************************************
        
              const oddOrEven = function (number) {
                if ( number % 2) {
                    console.log( " odd")
                } else {
                    console.log("even")
                }
             }
              oddOrEven(1); // => "1 is odd"
              oddOrEven(2); // => "2 is even"
              oddOrEven(5); // => "5 is odd"
              oddOrEven(10); // => "10 is even"
              // ********************************************************************************************************************************************
              const stringCase = function (string) {
             
               if ( string === string.toUpperCase()){
                console.log( "all upper case ")
                
               }else if ( string === string.toLowerCase()){
                console.log( "all lower case")
                }else {
                console.log( "mix case ")
                }

               }
               
              
              stringCase("JOHN"); // => "all upper case"
              stringCase("john"); // => "all lower case"
              stringCase("joHN"); // => "mix case"
              /// *****************************************************************************************************************************************
              /*const isLeapYear = function (year) {
              if (year % 400 ) {
                console.log( true)
               } else { 
                console.log("flase")
                
                }
              }
              
              
              isLeapYear(2000); // => true
              isLeapYear(2004); // => true
              isLeapYear(2020); // => true
              isLeapYear(2096); // => true
              
              isLeapYear(1603); // => false
              isLeapYear(2021); // => false
              isLeapYear(2200); // => false
              isLeapYear(2500); // => false
              isLeapYear(2600); // => false
              isLeapYear(3000); // => false*/
              // **************************************************************************************************************************************************
              //Write a function login_v01 that accepts two string arguments, username and password, and returns a string login successful if the username length is more than 6 and password length is more than or equal to 8 otherwise return login failed.
              const login_v01 = function (username, password) {
            
                if (username.legnth  > 6 && password.legnth >= 8 ) {
                    console.log( "login successful" )
                 } else { console.log( "login failed")

                    }
                }

              
              
              login_v01("John", "1234"); // => "login failed"
              login_v01("John", "12345678"); // => "login failed"
              login_v01("john_doe", "123456"); // => "login failed"
              login_v01("john_doe", "12345678"); // => "login successful"