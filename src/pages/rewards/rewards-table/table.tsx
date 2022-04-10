import TableHead from "./tablehead";
import TableRow from "./tablerow";

function RewardsTable(props) {
    
    return (
        <table className="table align-middle table-row-dashed fs-6 gy-3 dataTable no-footer" id="kt_table_widget_4_table">
            <TableHead />
            <tbody className="fw-bolder text-gray-600">
                <TableRow data={props.data}/>
            </tbody>
        </table>
    );
}

export default RewardsTable;