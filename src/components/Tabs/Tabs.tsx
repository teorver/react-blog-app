import './Tabs.css';

interface ITab {
  tabName_1: string,
  tabName_2: string,
  tabName_3: string,
}

function Tabs({ tabName_1, tabName_2, tabName_3 }: ITab) {
  return (
    <div className="wrapper">
      <button type="button" className="tab-wrapper">{tabName_1}</button>
      <button type="button" className="tab-wrapper">{tabName_2}</button>
      <button type="button" className="tab-wrapper">{tabName_3}</button>
    </div>
  );
}

export default Tabs;
