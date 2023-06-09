// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {
//   FooterWrapper,
//   WrapperName,
//   TextName,
//   Text,
//   FooterMain,
//   ListTextInf,
//   WrapperFirstList,
//   ListRouts,
//   TextRous,
//   ListNetWork,
//   WrapperRouters,
//   TextSubSlet,
//   TextOffers,
//   TextBtn,
//   BtnLogOut,
//   WrapperInp,
//   MailInp,
//   InputMod,
//   WrapperLastFooter,
//   ListNetWorkLast,
//   WrapperInpBtn,
//   StyledForm,
// } from './Footer.styled';
// import { subscribe } from 'operations/subscribe';
// import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs';

// import { Logo } from '../LogoFooter/LogoFooter';
// const Footer = () => {
//   const notifySuccess = message => toast.success(message, { autoClose: 3000 });
//   const notifyError = message => toast.error(message, { autoClose: 3000 });

//   const subscribeHandler = async e => {
//     e.preventDefault();
//     const form = e.target;
//     const { email } = form.elements;
//     try {
//       const result = await subscribe({ email: email.value });
//       form.reset();
//       if (result) notifySuccess('You have successfully subscribed!');
//     } catch (error) {
//       notifyError(error.message);
//     }
//   };

//   const uppPageHandler = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };
//   return (
//     <>
//       <ToastContainer />
//       <FooterMain>
//         <FooterWrapper>
//           <WrapperFirstList>
//             <WrapperName>
//               <Logo />
//               <TextName>So Yummy</TextName>
//             </WrapperName>
//             <ListTextInf>
//               <li>
//                 <Text>Database of recipes that can be replenished </Text>
//               </li>
//               <li>
//                 <Text>
//                   Flexible search for desired and unwanted ingredients
//                 </Text>
//               </li>
//               <li>
//                 <Text>Ability to add your own recipes with photos </Text>
//               </li>
//               <li>
//                 <Text>Convenient and easy to use</Text>
//               </li>
//             </ListTextInf>
//           </WrapperFirstList>
//           <WrapperRouters>
//             <ListRouts>
//               <li>
//                 <TextRous to="/categories" onClick={uppPageHandler}>
//                   Categories
//                 </TextRous>
//               </li>
//               <li>
//                 <TextRous to="/add" onClick={uppPageHandler}>
//                   Add recipes
//                 </TextRous>
//               </li>
//               <li>
//                 <TextRous to="own-recipes" onClick={uppPageHandler}>
//                   My recipes
//                 </TextRous>
//               </li>
//               <li>
//                 <TextRous to="/favorite" onClick={uppPageHandler}>
//                   Favorite
//                 </TextRous>
//               </li>
//               <li>
//                 <TextRous to="/shopping-list" onClick={uppPageHandler}>
//                   Shopping list
//                 </TextRous>
//               </li>
//             </ListRouts>
//             <ListNetWork>
//               <li>
//                 <BsFacebook
//                   style={{ fill: '#8BAA36', width: '20px', height: '20px' }}
//                 />
//               </li>
//               <li>
//                 <BsInstagram
//                   style={{ fill: '#8BAA36', width: '20px', height: '20px' }}
//                 />
//               </li>
//               <li>
//                 <BsYoutube
//                   style={{ fill: '#8BAA36', width: '20px', height: '20px' }}
//                 />
//               </li>
//               <li>
//                 <BsTwitter
//                   style={{ fill: '#8BAA36', width: '20px', height: '20px' }}
//                 />
//               </li>
//             </ListNetWork>
//           </WrapperRouters>
//           <WrapperLastFooter>
//             <TextSubSlet>Subscribe to our Newsletter</TextSubSlet>
//             <TextOffers>
//               Subscribe up to our newsletter. Be in touch with latest news and
//               special offers, etc.
//             </TextOffers>{' '}
//             <WrapperInpBtn>
//               <StyledForm onSubmit={subscribeHandler}>
//                 <WrapperInp>
//                   <MailInp />
//                   <InputMod
//                     type="text"
//                     placeholder="Enter your email address"
//                     name="email"
//                   />
//                 </WrapperInp>
//                 <BtnLogOut type="submit">Subscribe</BtnLogOut>
//               </StyledForm>
//             </WrapperInpBtn>
//             <ListNetWorkLast>
//               <li>
//                 <BsFacebook
//                   style={{ fill: '#8BAA36', width: '20px', height: '20px' }}
//                 />
//               </li>
//               <li>
//                 <BsInstagram
//                   style={{ fill: '#8BAA36', width: '20px', height: '20px' }}
//                 />
//               </li>
//               <li>
//                 <BsYoutube
//                   style={{ fill: '#8BAA36', width: '20px', height: '20px' }}
//                 />
//               </li>
//               <li>
//                 <BsTwitter
//                   style={{ fill: '#8BAA36', width: '20px', height: '20px' }}
//                 />
//               </li>
//             </ListNetWorkLast>
//           </WrapperLastFooter>
//         </FooterWrapper>
//         <div className="light-footer">
//           <p className="light-year">© 2023 All Rights Reserved.</p>
//           <p className="light-text">Terms of Service</p>
//         </div>
//       </FooterMain>
//     </>
//   );
// };

// export default Footer;
