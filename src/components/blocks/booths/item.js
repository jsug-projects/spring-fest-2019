import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'

const Container = styled.div`
  border-radius: ${props => props.theme.shape.radius * 2}px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  background: ${props => props.theme.colors.white};
`

const Title = styled.h3`
  margin-bottom: ${props => props.theme.spacing(1)};
  font-family: ${props => props.theme.typography.types.display};
  font-size: ${props => props.theme.typography.size.xl};
  font-weight: 800;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.typography.size.md};
  }
`

const Description = styled.div`
  white-space: pre-line;
  line-height: 1.8rem;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.typography.size.xs};
    line-height: 1.4rem;
  }
`

const ContentsHolder = styled.div`
  padding: ${props => props.theme.spacing(3, 4, 0)};

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    padding: ${props => props.theme.spacing(2, 2.5, 0)};
  }
`

const Sponsor = styled.div`
  padding: ${props => props.theme.spacing(2, 4)};
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    padding: ${props => props.theme.spacing(2, 2.5)};
  }
`

const IconHolder = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0rem;
  // margin-bottom: 1rem;
`

const Icon = styled.img`
  margin-bottom: 0;
  border-radius: 10px;
  min-width: 120px;
  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    min-width: 90px;
    max-width: 90px;
  }
`

const SponsorDetail = styled.div`
  // margin-bottom: ${props => props.theme.spacing(2)};
  margin-left: ${props => props.theme.spacing(1)};
`

const SponsorName = styled.h4`
  font-family: ${props => props.theme.typography.types.display};
  font-size: ${props => props.theme.typography.size.md};
  opacity: 0.9;
  font-weight: 800;
  margin-bottom: 0;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    ${props => props.theme.typography.size.sm};
  }
`

const SponsorProfile = styled.p`
  white-space: pre-line;
  font-size: ${props => props.theme.typography.size.sm};
  margin-top: ${props => props.theme.spacing(0.5)};
  line-height: 1.4rem;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    ${props => props.theme.typography.size.xs};
    line-height: 1.3rem;
  }
`

export default ({ booth, position }) => {
  const { title, description, sponsor } = booth
  return (
    <Container position={position}>
      {(description || title) && (
        <ContentsHolder>
          <Title>{title}</Title>
          <Description>{parse(description)}</Description>
        </ContentsHolder>
      )}
      <Sponsor>
        <IconHolder>
          <Icon
            src={sponsor.image.childImageSharp.resize.src}
            alt={sponsor.name}
          />
        </IconHolder>
        <SponsorDetail>
          <SponsorName>{sponsor.name}</SponsorName>
          {sponsor.profile && (
            <SponsorProfile>{sponsor.profile}</SponsorProfile>
          )}
        </SponsorDetail>
      </Sponsor>
    </Container>
  )
}
