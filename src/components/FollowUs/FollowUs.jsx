import { Item, List, Title, StyledLink } from './FollowUs.styled';
import { ReactComponent as Instagram } from '../images/socials/insta.svg';
import { ReactComponent as Facebook } from '../images/socials/facebook.svg';
import { ReactComponent as Youtube } from '../images/socials/youtube.svg';
import { ReactComponent as Twitter } from '../images/socials/twitter.svg';
export const FollowUs = () => {
  return (
    <>
      <Title>Follow us</Title>
      <List>
        <Item>
          <StyledLink href="https://www.facebook.com/" target="_blank">
            <Facebook />
          </StyledLink>
        </Item>
        <Item>
          <StyledLink href="https://www.youtube.com/" target="_blank">
            <Youtube />
          </StyledLink>
        </Item>
        <Item>
          <StyledLink href="https://twitter.com/" target="_blank">
            <Twitter />
          </StyledLink>
        </Item>
        <Item>
          <StyledLink href="https://www.instagram.com/" target="_blank">
            <Instagram />
          </StyledLink>
        </Item>
      </List>
    </>
  );
};
