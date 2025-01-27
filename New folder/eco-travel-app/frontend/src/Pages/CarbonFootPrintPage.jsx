const { default: CarbonFootPrint } = require("../Components/CarbonFootPrint");

const CarbonFootPrintPage = () => {
    return (
        <div>
            <h1>
                Carbon FootPrint Estimator Page
            </h1>
            <CarbonFootPrint></CarbonFootPrint>
        </div>
    )
};

export default CarbonFootPrintPage;