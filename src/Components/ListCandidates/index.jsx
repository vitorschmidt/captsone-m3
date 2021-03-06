//Styled-component imports
import { Container } from "./style";

import CardCandidates from "../CardCandidates";

//Providers imports
import { useCandidate } from "../../Providers/Candidates";

const ListCandidates = ({ authenticated }) => {
  const { candidate, filteredCandidates, value, search } = useCandidate();

  return (
    <Container>
      {value === false
        ? candidate.map((candidate, index) => (
            <CardCandidates
              authenticated={authenticated}
              key={index}
              candidate={candidate}
            />
          ))
        : filteredCandidates.map((candidate, index) => (
            <CardCandidates
              authenticated={authenticated}
              key={index}
              candidate={candidate}
            />
          ))}
    </Container>
  );
};

export default ListCandidates;
