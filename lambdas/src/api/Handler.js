const Result = require('./Result');

class Handler {

constructor(bmiCalcService){
    this.handleCalculation = async (event, context, callback) => {
        try {


            let weight = event.queryStringParameters.weight;
            let height = event.queryStringParameters.height;
            if (isNaN(weight) || isNaN(height)) {
                return new Result.BadRequest_400('w or h is NAN');
                //http 400
            }
            let bmiResult = await this.bmiCalcService.performBmiCalculation(weight, height)
                return new Result.OK_200('good');
        }
        catch (e) {
           return  new Result.InernalServerError_500('error');

        }
    };
    this.bmiCalcService = bmiCalcService;
}
}

exports.Handler =Handler;