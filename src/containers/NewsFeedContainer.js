import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadNews } from '../actions/newsActions'
import NewsFeed from '../components/NewsFeed'

const mapStateToProps = state => ({
    news: state.news
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loadNews
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps) (NewsFeed)