import {
  FooterWrapper,
  WrapperName,
  TextName,
  Text,
  FooterMain,
  ListTextInf,
  WrapperFirstList,
  ListRouts,
  TextRous,
  ListNetWork,
  WrapperRouters,
  TextSubSlet,
  TextOffers,
  TextBtn,
  BtnLogOut,
  WrapperInp,
  MailInp,
  InputMod,
  WrapperLastFooter,
} from './Footer.styled';
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
const Footer = () => {
  return (
    <FooterMain>
      <FooterWrapper>
        <WrapperFirstList>
          <WrapperName>
            {/* <svg width="" height="">
          <use href=""></use>
        </svg> */}
            <TextName>So Yummy</TextName>
          </WrapperName>
          <ListTextInf>
            <li>
              <Text>Database of recipes that can be replenished </Text>
            </li>
            <li>
              <Text>Flexible search for desired and unwanted ingredients</Text>
            </li>
            <li>
              <Text>Ability to add your own recipes with photos </Text>
            </li>
            <li>
              <Text>Convenient and easy to use</Text>
            </li>
          </ListTextInf>
        </WrapperFirstList>
        <WrapperRouters>
          <ListRouts>
            <li>
              <TextRous>Ingredients</TextRous>
            </li>
            <li>
              <TextRous>Add recipes</TextRous>
            </li>
            <li>
              <TextRous>My recipes</TextRous>
            </li>
            <li>
              <TextRous>Favorite</TextRous>
            </li>
            <li>
              <TextRous>Shopping list</TextRous>
            </li>
          </ListRouts>
          <ListNetWork>
            <li>
              <BsFacebook
                style={{ fill: '#8BAA36', width: '20px', height: '20px' }}
              />
            </li>
            <li>
              <BsInstagram
                style={{ fill: '#8BAA36', width: '20px', height: '20px' }}
              />
            </li>
            <li>
              <BsYoutube
                style={{ fill: '#8BAA36', width: '20px', height: '20px' }}
              />
            </li>
            <li>
              <BsTwitter
                style={{ fill: '#8BAA36', width: '20px', height: '20px' }}
              />
            </li>
          </ListNetWork>
        </WrapperRouters>
        <WrapperLastFooter>
          <TextSubSlet>Subscribe to our Newsletter</TextSubSlet>
          <TextOffers>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </TextOffers>
          <form>
            <WrapperInp>
              {' '}
              <MailInp />
              <InputMod type="text" placeholder="Enter your email address" />
            </WrapperInp>
          </form>
          <BtnLogOut>
            <TextBtn>Subscribe</TextBtn>
          </BtnLogOut>
        </WrapperLastFooter>
      </FooterWrapper>
    </FooterMain>
  );
};

export default Footer;
