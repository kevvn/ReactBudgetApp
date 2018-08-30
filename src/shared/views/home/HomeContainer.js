import {connect} from 'react-redux'
import Home from './HomePresentational';
const mapStateToProps = state => {
    return {
        tabSelected: state.tabSelected
    }
  }
export default connect(mapStateToProps)(Home);