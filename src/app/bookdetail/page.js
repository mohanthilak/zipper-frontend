import React from 'react'
import './bookdetail.css'
import NavbarSignin from '../navbarSignin/page'
const BookDetails = () => {
  return (
    <>

   <NavbarSignin />
    <div className="bookdetails lol">
        <div className="row_details">
            <div className="col-2">
                <img src="https://5.imimg.com/data5/JU/IE/TE/SELLER-47422800/holistic-health-books-ikigai-the-japanese-secret-to-a-long-and-happy-life-500x500.jpg" id='bookimg' style={{width:'100%'}}  alt="" />
                <div className="small_imgs_row">
                    <div className="small_imgs_col">
                        <img src="https://5.imimg.com/data5/JU/IE/TE/SELLER-47422800/holistic-health-books-ikigai-the-japanese-secret-to-a-long-and-happy-life-500x500.jpg" style={{width:'100%'}} className='small_img' alt="" />
                    </div>
                    <div className="small_imgs_col">
                        <img src="https://5.imimg.com/data5/JU/IE/TE/SELLER-47422800/holistic-health-books-ikigai-the-japanese-secret-to-a-long-and-happy-life-500x500.jpg" style={{width:'100%'}} className='small_img' alt="" />
                    </div>
                    <div className="small_imgs_col">
                        <img src="https://5.imimg.com/data5/JU/IE/TE/SELLER-47422800/holistic-health-books-ikigai-the-japanese-secret-to-a-long-and-happy-life-500x500.jpg" style={{width:'100%'}} className='small_img' alt="" />
                    </div>
                </div>
            </div>
            <div className="col-2">
               <h1>ikigai</h1>
               <h4>20rs/week</h4>
               <button className='btn_detail'>
                add to cart
               </button>
               <h3>book details</h3><br />
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia est voluptas quos eligendi assumenda unde ipsam eaque tempore. Inventore ab libero, ratione expedita nam dignissimos in natus deserunt vitae ullam?
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a commodi, rem enim minima maiores totam, deleniti quod, ipsum aliquid blanditiis inventore quasi! Aliquid ipsam voluptate quia non. Ipsum, iste.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default BookDetails