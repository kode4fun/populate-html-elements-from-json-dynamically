import { htmlElements } from './htmlElements';
import { mockData } from './mockData';

function App() {
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
              <tr>
                {htmlElements.map((htmlElement, eleIndex) => (
                  <td key={eleIndex}>{htmlElement.getHtmlElement(jsonObj)}</td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
