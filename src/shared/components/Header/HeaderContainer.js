import { connect } from 'react-redux'
import Header from './HeaderPresentational';
import { chooseTab } from '../../store/actions';


const mapStateToProps = state => {
    return {
        tabSelected: state.tabSelected
    }
}

const mapDispatchToProps = dispatch => ({
    selectTab: (value) => dispatch(chooseTab(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)