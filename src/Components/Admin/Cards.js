import TempCard from "./TempCard";
import create from '../../Images/ebook.png';
import update from '../../Images/training.png';
import track from '../../Images/time.png';
import report from '../../Images/report.png';


function Cards() {
  return (
    <div className="cards_row">
      <TempCard title={'Create Course'} img={create}/>
      <TempCard title={'Update Course'} img={update}/>
      <TempCard title={'Track Progress'} img={track}/>
      <TempCard title={'Generate reports'} img={report}/>
      <TempCard title={'Generate reports'} img={report}/>
      <TempCard title={'Generate reports'} img={report}/>
    </div>
  );
}

export default Cards;