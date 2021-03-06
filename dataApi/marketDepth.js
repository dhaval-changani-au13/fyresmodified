const apiService = require("../apiService/apiService");
const token = require("../token/tokenGeneration");
const helper = require('../helper/helper');
const dataApi = helper.dataAccessPoint();


class MarketDepth {
    #urlSubPath = 'depth/'
    #symbol;
    #ohlcv_flag;

    constructor() {
        this.token = token.getAuthToken()
    }

    setSymbol(value) {
        this.#symbol = value;
        return this;

    }

     setOhlcvFlag(value){
        this.#ohlcv_flag = value
        return this;
    }


    async getMarketDepth() {
        let uri = dataApi + this.#urlSubPath
        let url = apiService.generateUrl(uri, this.getUserValueObject());
        let result = await new apiService(url, this.token).get();
        return result

    }

    getUserValueObject() {
        let userObject = {}

        userObject.symbol = this.#symbol;
        userObject.ohlcv_flag = this.#ohlcv_flag

        return userObject
    }

}

module.exports = MarketDepth;