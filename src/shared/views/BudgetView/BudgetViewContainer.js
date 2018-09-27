import { connect } from 'react-redux'
import BudgetViewPresentational from './BudgetViewPresentational';
import { addToBudget } from '../../store/actions';


const mapStateToProps = state => {
    return {
        tabSelected: state.tabSelected
    }
}

const mapDispatchToProps = dispatch => ({
    addToBudget: (category,item,amount) => dispatch(addToBudget(category,item,amount))
})

export default connect(mapStateToProps,mapDispatchToProps)(BudgetViewPresentational)