import React from 'react';
import styled from 'styled-components/macro';

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <ALink href={`/story/${id}`}>
      <Wrapper>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
        <Abstract>{abstract}</Abstract>
      </Wrapper>
    </ALink>
  );
};

const ALink = styled.a`
  container: secondary-story / inline-size;
`;
const narrowStory = `secondary-story (max-width: ${300/16}rem)`;

const Wrapper = styled.article`
  display: grid;
  gap: 4px 16px;
  color: var(--color-gray-900);
  grid-template-columns: 120px 1fr;
  grid-template-areas:
      'image heading'
      'image abstract';
  
  @container ${narrowStory} {
    grid-template-columns: 1fr;
    grid-template-areas:
      'image'
      'heading'
      'abstract';
  }
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;
  
  @container ${narrowStory} {
    margin-top: revert;
  }

`;

const Abstract = styled.p`
  grid-area: abstract;
  font-size: 1rem;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export default SecondaryStory;
