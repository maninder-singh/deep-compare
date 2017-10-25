var dc = (() => {

    var constant = {
        "NULL":"null",
        "UNDEFINED":"undefined",
        "ARRAY":"array",
        "OBJECT":"object",
        "NUMBER":"number",
        "STRING":"string",
        "BOOLEAN":"boolean"
    };

    var deepCompare = (first, second) => {
        return compareValues(first,second);
    }

    var compareInstance = (first, second) => {
        var instanceInfo = {
            "type":"",
            "isEqual":false
        };

        if(first === null && second === null){
            instanceInfo.type = constant.NULL;
            instanceInfo.isEqual = true;
        }else if(first === undefined && second === undefined){
            instanceInfo.type = constant.UNDEFINED;
            instanceInfo.isEqual = true;
        }else if(first && second && first.constructor ===  second.constructor){
            instanceInfo.type = getInstance(first);
            instanceInfo.isEqual = true;
        }else{
            instanceInfo.type = "";
            instanceInfo.isEqual = false;
        }
        return instanceInfo;
    }

    var getInstance = obj => {

        if(obj === null){
            return constant.NULL;
        }else if(obj === undefined){
            return constant.UNDEFINED;
        }else if(obj.constructor === Array){
            return constant.ARRAY;
        }else if(obj.constructor === String){
            return constant.STRING;
        }else if(obj.constructor === Number){
            return constant.NUMBER;
        }else if(obj.constructor === Object){
            return constant.OBJECT;
        }else if(obj.constructor === Boolean){
            return constant.BOOLEAN;
        }
        return constant.NULL;
    }

    var compareArray = (first,second) => {
        if(first.length !== second.length){
            return false;
        }

        for(var index = 0; index < first.length ; index++){
            if(!compareValues(first[index],second[index])){
                return false;
            }
        }
        return true;
    }

    var compareObject = (first, second) => {
        var keys = Object.keys(first);

        if(keys.length !== Object.keys(second).length){
            return false;
        }

        for(var index = 0; index < keys.length ; index++){
            if(!second.hasOwnProperty(keys[index])){
                return false;
            }

            if(!compareValues(first[keys[index]],second[keys[index]])){
                return false;
            }
        }
        return true;
    }

    var compareValues = (first, second) => {

        var instanceInfo = compareInstance(first,second);
        if(!instanceInfo.isEqual){
            return false;
        }

        switch (instanceInfo.type){
            case constant.NULL:
            case constant.UNDEFINED:
                return true;
                break;
            case constant.STRING:
                return first.localeCompare(second) === 0;
                break;
            case constant.NUMBER:
            case constant.BOOLEAN:    
                return first === second;
                break;
            case constant.ARRAY:
                return compareArray(first,second);
                break;
            case constant.OBJECT:
                return compareObject(first,second);
                break;
            default:
                return false;
        }
    }

    return {
        compare: deepCompare
    }

})();