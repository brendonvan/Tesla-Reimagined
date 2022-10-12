import './Design.css';
import Header from '../../components/Header';
import Editor from '../../components/Design/Editor';

function Design(props) {
  
  return (
    <>
      <Header />
      <div className='design-page'>
        
        <Editor />
      </div>
    
    </>
  )
}

export default Design;