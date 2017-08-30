function typeOfVar(){
    typeof null;//"object"

    typeof undefined;//"undefined"

    typeof true;//"boolean"

    typeof 123;//'number'
    
    typeof "abc";//'string'
    
    typeof function() {};'function'
    
    typeof {};//'object'
    
    typeof [];//'object'
    
    typeof unknownVariable;//'undefined'
}
typeOfVar();