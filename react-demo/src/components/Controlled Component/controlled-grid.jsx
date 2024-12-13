/* eslint-disable react/prop-types */
export default function ControlledGrid(props) {
  return (
    <div className="container-fluid">
      <h3>This is a controlled grid</h3>
      <table className={`table table-hover caption-top ${props.theme}`}>
        <caption>{props.caption}</caption>
        <thead>
          <tr>
            {props.fields.map((field, index) => (
              <th key={index}>{field.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((record, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(record).map((field) => (
                <td key={field}>{record[field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
        {props.footer && (
          <tfoot>
            <tr>
              <td className="text-center" colSpan={Object.keys(props.data[0]).length}>
                {props.footer}
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}
