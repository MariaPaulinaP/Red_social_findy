// import React from 'react'
// import "./home.scss";
// import logo from "../assests/logo.png"


// function home() {
//   return (
//     <div className="logo">
//       <img src={logo}/>
//       <div className="instahome-wraper">
//         <div className="sidebar">
//           <div className="sidebar-wraper">
//             <div className="sidebar-menu-wraper">
//               <div className="siderbar-menu-item">
//                 <div className="side-menu-icon">
//                 <svg aria-label="Home" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path></svg>
//                 </div>
//                 <div className="menu-text active">
//                   Home
//                 </div>
//               </div>
//               <div className="siderbar-menu-item">
//                 <div className="side-menu-icon">
//                 <svg aria-label="Search" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
//                 </div>
//                 <div className="menu-text">
//                 Search
//                 </div>
//               </div>
//               <div className="siderbar-menu-item">
//                 <div className="side-menu-icon">
//                 <svg aria-label="Explore" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon><polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
//                 </div>
//                 <div className="menu-text">
//                 Explore
//                 </div>
//               </div>
//               <div className="siderbar-menu-item">
//                 <div className="side-menu-icon">
//                 <svg aria-label="Reels" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line><path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fill-rule="evenodd"></path></svg>
//                 </div>
//                 <div className="menu-text">
//                 Reels
//                 </div>
//               </div>
//               <div className="siderbar-menu-item">
//                 <div className="side-menu-icon">
//                 <svg aria-label="Direct" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
//                 </div>
//                 <div className="menu-text">
//                   Direct
//                 </div>
//               </div>
              
              
//               <div className="siderbar-menu-item">
//                 <div className="side-menu-icon">
//                 <svg aria-label="Notifications" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Notifications</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
//                 </div>
//                 <div className="menu-text">
//                 Notifications
//                 </div>

                
//               </div>
//               <div className="siderbar-menu-item">
//                 <div className="side-menu-icon">
//                 <svg aria-label="New post" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>

//                 </div>
//                 <div className="menu-text">
//                 New post
//                 </div>

//               </div>
//               <div className="siderbar-menu-item">
//                 <div className="side-menu-icon">
//                   <img className='sidepar-profile' src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg" alt="" />

//                 </div>
//                 <div className="menu-text">
//                 Profile
//                 </div>

//               </div>
              
              
//             </div>
            
//             <div className="sidebar-footer">
//               <div className="siderbar-menu-item" > 
//               <div className="side-menu-icon">
//               <svg aria-label="Settings" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="21" y1="4" y2="4"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="21" y1="12" y2="12"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="21" y1="20" y2="20"></line></svg>
//               </div>
//               <div className="menu-text">
//                 More
//                 </div>

//               </div>
            
//             </div>
            
//           </div>
//         </div>
//         <div className="newsfeed">
//           <div className="conteiner">
//             <div className="newsfeed-wraper">
//           <div className="newsfeed-left">
//             <div className="story-div-wraper">
//               <ul>
//                 <li>
//                   <div className="story-wraper">
//                     <div className="story-img">
//                       <img className='story' src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg" alt="" />
//                     </div>
//                     <p>Jennie_kim</p>
//                   </div>
//                 </li>
//                 <li>
//                   <div className="story-wraper">
//                     <div className="story-img">
//                       <img className='story' src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg" alt="" />
//                     </div>
//                     <p>Rick_m03</p>
//                   </div>
//                 </li>
//                 <li>
//                   <div className="story-wraper">
//                     <div className="story-img">
//                       <img className='story' src="https://f.rpp-noticias.io/2019/02/15/753296descarga-7jpg.jpg" alt="" />
//                     </div>
//                     <p>disfruta_fear</p>
//                   </div>
//                 </li>
//                 <li>
//                   <div className="story-wraper">
//                     <div className="story-img">
//                       <img className='story' src="https://static01.nyt.com/images/2021/06/08/science/07SCI-MINDSEYE3-esp/merlin_188753607_a3af8ae2-4296-4b6f-b2b1-4973044f9bd2-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="" />
//                     </div>
//                     <p>patrick_jhon22</p>
//                   </div>
//                 </li>
//                 <li>
//                   <div className="story-wraper">
//                     <div className="story-img">
//                       <img className='story' src="https://phantom-marca.unidadeditorial.es/76cf88488807f5e6fed43d4705c9859f/resize/828/f/jpg/assets/multimedia/imagenes/2022/02/02/16437899001758.jpg" alt="" />
//                     </div>
//                     <p>NBa_latam</p>
//                   </div>
//                 </li>
                
//               </ul>
//             </div>
//             <div className="post-feed">
//               <div className="post-items">
//                 <div className="post-item-header">
//                   <div className="profile-info-wraper">
//                   <div className="profile-info">
//                   <img 
//                   src="https://i.pinimg.com/736x/23/2a/2b/232a2b09444d7e9c2a0f1c733022305a.jpg" alt="" 
//                   />
//                     <a href="#">Jenni_Kim</a>
                  
//                 </div>
//                   </div>
                
//                 <div className="more-func">
//                   <button>
//                   <svg aria-label="More options" class="_ab6-" color="rgb(0, 0, 0)" fill="#000000" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
//                   </button>
//                 </div>
//                 </div>
//               </div>
//               <div className="post-img">
//                 <img  src="https://static.diariofemenino.com/pictures/articulos/211000/211571-4.jpg" alt="" />
//               </div>
//               <div className="post-reaction">
//                 <div className="post-reaction-l">
//                   <ul>
//                     <li>
//                       <button>
//                         <div className="icon">
//                         <svg aria-label="Like" class="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
//                         </div>
//                       </button>
//                     </li>
//                     <li>
//                       <button>
//                         <div className="icon">
//                         <svg aria-label="Comment" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
//                         </div>
//                       </button>
//                     </li>
//                     <li>
//                       <button>
//                         <div className="icon">
//                         <svg aria-label="Share Post" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0,0,0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
//                         </div>
//                       </button>
//                     </li>
                 
                    
//                   </ul>
//                 </div>
//                 <div className="post-reaction-r">
//                   <ul>
//                     <li>
//                       <button>
//                         <div className="icon">
//                         <svg aria-label="Save" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0);" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
//                         </div>
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="post-like">
//                 <p> <span>Jenni_kim</span> 926 Likes</p>
//               </div>
//               <div className="post-content"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro asperiores assumenda odit magni ea dignissimos delectus amet provident itaque, deserunt natus totam veritatis fugit, impedit adipisci cupiditate? Consequatur, fugit.</p></div>
//             </div>
//             <div className="post-comment">
//               <div className="post-comment-div">
//                 <div className="post-comment-wraper">

//                   <div>
//                     <form> 
//                       <div>
//                     <svg aria-label="Emoji" class="x1lliihq x1n2onr6" color="rgb(0,0,0)" fill="rgb(0,0,0)" height="13" role="img" viewBox="0 0 24 24" width="13"><title>Emoji</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <input type="text" 
//                     placeholder='Add a comment....' 
//                     />
//                   </div>
//                   <div>
//                     <button>Post</button>
//                   </div>
                      
//                     </form>
//                   </div>
                  
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="newsfeed-right">
//             <div className="user-profile">
//               <div className="user-profile-wraper">
//                 <div className="user-profile-l">
//                   <div className="user">
//                     <div className="user-imgen">
//                       <img src="https://25.media.tumblr.com/7db7c341827a86892d57462599217751/tumblr_msu00zJJ5a1shnblwo1_400.gif" alt="" />
                      
//                     </div>
                    
//                     <div className="user-name">
//                       <h5>Jhonn_js23</h5>
//                       <p>jhonn jairo</p>
//                     </div>
                    
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </div>
//           </div>
           
//         </div>
//       </div>
      
//     </div>

    
//   )
// }
 
// export default home