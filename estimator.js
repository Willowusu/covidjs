const covid19ImpactEstimator = (data) => data;

export default covid19ImpactEstimator;

let output ={
    data:{
        hospitalBedsByRequestedTime='',
        casesForICUByRequestedTime=''
    },
    impact:{
        currentlyInfected:'',
        infectionsByRequestedTime:'',
        dollarsInFlight:''
    },
    severeImpact:{
        currentlyInfected:'',
        infectionsByRequestedTime:'',
        severeCasesByRequestedTime: ''
    }
};

output.impact.currentlyInfected=(covid19ImpactEstimator.reportedCases)*10;
output.severeImpact.currentlyInfected=(covid19ImpactEstimator.reportedCases)*50;
output.impact.infectionsByRequestedTime=(output.impact.currentlyInfected)*(Math.pow(2,10));
output.severeImpact.infectionsByRequestedTime=(output.severeImpact.currentlyInfected)*(Math.pow(2,10));
output.severeImpact.severeCasesByRequestedTime=(output.severeImpact.infectionsByRequestedTime)*0.15;
output.data.hospitalBedsByRequestedTime=(output.severeImpact.severeCasesByRequestedTime)-(covid19ImpactEstimator.totalHospitalBeds*(0.65));
output.data.casesForICUByRequestedTime=(output.impact.infectionsByRequestedTime*(0.2));
output.data.casesForVentilatorsByRequestedTime=(output.impact.infectionsByRequestedTime*(0.2));
output.data.dollarsInFlight=((output.impact.infectionsByRequestedTime*0.65)*1.5*30);