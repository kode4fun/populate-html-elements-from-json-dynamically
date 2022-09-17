import { htmlElements } from './htmlElements';
import { mockData } from './mockData';

function App() {

 const editBtnFunc = (rowData) => {
  alert(JSON.stringify(rowData))
 }

  return (
    <div className="container">
      <h1>Populate HTML elements from JSON response dynamically</h1>
      <table className='table'>
        <thead>
          <tr>
            {htmlElements.map((htmlElement, index) => (
                <th key={index}>{htmlElement.colName}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {mockData.map((jsonObj, jsonIndex) => (
              <tr key={jsonIndex}>
                {htmlElements.map((htmlElement, eleIndex) => (
                  <td key={eleIndex}>{htmlElement.getHtmlElement(jsonObj)}</td>
                ))}
                <button className="btn btn-warning" onClick={() => editBtnFunc(jsonObj)}>Edit</button>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
