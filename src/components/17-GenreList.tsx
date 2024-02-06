import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/17-useGenres";
import getCroppedImageUrl from "../services/14-image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  /** 22- Highlighting the Selected Genre */
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  /** 36-Shipping Static Data -- the folowing two lines can be commented out or leave as before*/
  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              {/* 21-Filtering Games by Genre */}
              {/* replace the text with button, so we can click on the genres */}
              {/* <Text fontSize="lg">{genre.name}</Text> */}
              <Button
                whiteSpace="normal"
                textAlign="left"
                // 22- Highlighting the Selected Genre
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
