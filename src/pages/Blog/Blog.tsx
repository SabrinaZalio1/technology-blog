import Banner from "../../components/molecules/Banner/Banner"
import { Footer } from "../../components/sections/Footer/Footer"
import { Header } from "../../components/sections/Header/Header"
// import MostViewPosts from "../../components/sections/MostViewPosts/MostViewPosts"
import PostList from "../../components/sections/PostsList/PostsList"
import UploadPostModal from "../../components/organisms/UploadPostModal/UploadPostModal"
import UploadLoader from "../../components/molecules/UploadLoader/UploadLoader"

function Blog() {
    return (
        <div>
            <Header/>
             {/* <FilterPill text='Diversity & Inclusion'/>
            <Button variant='primary' text="oli"/> */}
            <PostList/> 
       <UploadPostModal/>
       <UploadLoader/>
            {/* <MostViewPosts/> */}
            <Banner/>
            <Footer/>
        </div>
    )
}

export default Blog