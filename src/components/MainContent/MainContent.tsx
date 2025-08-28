import { type FC } from "react";
import type { Movie } from "../TrendingView/utils";
import {
  Root,
  Banner,
  BannerContent,
  Tag,
  Title,
  Meta,
  Desc,
  TitleImage,
  ButtonsRow,
  PlayButton,
  InfoButton,
} from "./MainContent.styled";

type Props = {
  selectedMovie: Movie | null;
};

export const MainContent: FC<Props> = ({ selectedMovie }) => {
  return (
    <Root>
      <Banner>
        <BannerContent>
          <Tag variant="subtitle1">{selectedMovie?.Category ?? ""}</Tag>

          <Title variant="h2">{selectedMovie?.Title ?? ""}</Title>

          <TitleImage
            src={`${import.meta.env.BASE_URL}assets/${selectedMovie?.TitleImage ?? ""}`}
            alt={selectedMovie?.Title ?? ""}
          />

          <Meta>
            {selectedMovie?.ReleaseYear ?? ""} •{" "}
            {selectedMovie?.MpaRating ?? ""} • {selectedMovie?.Duration ?? ""}
          </Meta>

          <Desc>{selectedMovie?.Description ?? ""}</Desc>

          <ButtonsRow>
            <PlayButton variant="contained">▶ Play</PlayButton>
            <InfoButton variant="contained">More Info</InfoButton>
          </ButtonsRow>
        </BannerContent>
      </Banner>
    </Root>
  );
};
