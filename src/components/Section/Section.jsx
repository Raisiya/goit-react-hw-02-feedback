import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Title } from './Section.slyled';

export const Section = ({ title, children }) => (
    <Box maxWidth={2} mt={3} mx='auto' as='section'>
        <Title>{title}</Title>
        {children}
    </Box>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};