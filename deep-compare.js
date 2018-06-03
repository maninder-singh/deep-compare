let dc = (() => {

    const constant = {
        "NULL":"null",
        "UNDEFINED":"undefined",
        "ARRAY":"array",
        "OBJECT":"object",
        "NUMBER":"number",
        "STRING":"string",
        "BOOLEAN":"boolean"
    };

    let deepCompare = (first, second) => {
        return compareValues(first,second);
    };

    let compareInstance = (first, second) => {
        let instanceInfo = {
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
        }else if(first === "" && second === ""){
            instanceInfo.type = constant.STRING;
            instanceInfo.isEqual = true;
        }else if(first === 0 && second === 0){
            instanceInfo.type = constant.NUMBER;
            instanceInfo.isEqual = true;
        }
        return instanceInfo;
    };

    let getInstance = obj => {

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
    };

    let compareArray = (first,second) => {
        if(first.length !== second.length){
            return false;
        }

        for(let index = 0; index < first.length ; index++){
            if(!compareValues(first[index],second[index])){
                return false;
            }
        }
        return true;
    };

    let compareObject = (first, second) => {
        let keys = Object.keys(first);

        if(keys.length !== Object.keys(second).length){
            return false;
        }

        for(let index = 0; index < keys.length ; index++){
            if(!second.hasOwnProperty(keys[index])){
                return false;
            }

            if(!compareValues(first[keys[index]],second[keys[index]])){
                return false;
            }
        }
        return true;
    };

    let compareValues = (first, second) => {

        let instanceInfo = compareInstance(first,second);
        if(!instanceInfo.isEqual){
            return false;
        }

        switch (instanceInfo.type){
            case constant.NULL:
            case constant.UNDEFINED:
                return true;
            case constant.STRING:
                return first.localeCompare(second) === 0;
            case constant.NUMBER:
            case constant.BOOLEAN:    
                return first === second;
            case constant.ARRAY:
                return compareArray(first,second);
            case constant.OBJECT:
                return compareObject(first,second);
            default:
                return false;
        }
    };

    return deepCompare;
})();