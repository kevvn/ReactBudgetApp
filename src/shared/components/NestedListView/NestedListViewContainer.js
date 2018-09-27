import { connect } from 'react-redux'
import NestedListViewPresentational from './NestedListViewPresentational';
import { addToBudget } from '../../store/actions';


const mapStateToProps = state => {
    console.log(state)
    return {
        budgetData: state.budgetData
    }
}

const mapDispatchToProps = dispatch => ({
    addToBudget: (category,item,amount) => dispatch(addToBudget(category,item,amount))
})

export default connect(mapStateToProps,mapDispatchToProps)(NestedListViewPresentational)