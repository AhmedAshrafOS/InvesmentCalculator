import React from "react";

const ResultTable = (props) => {

    return (

        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((yearlydata =>
                    <tr key={yearlydata.year} >
                        <td>{yearlydata.year}</td>
                        <td>{yearlydata.savingsEndOfYear}</td>
                        <td>{yearlydata.yearlyInterest}</td>
                        <td>{yearlydata.yearlyContribution - props.inital['current-savings'] -
                            yearlydata.yearlyContribution * yearlydata.year}</td>
                        <td>{props.inital['current-savings'] + yearlydata.yearlyContribution}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    );
}

export default ResultTable;