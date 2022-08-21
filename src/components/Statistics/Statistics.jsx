import PropTypes from 'prop-types';
import { Box } from '../Box';
import { StatItem, StatCount } from './Statistics.styled';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
        <Box as={'ul'}>
            <StatItem>
                <p>Good: <StatCount>{good}</StatCount></p> 
            </StatItem>

            <StatItem>
                <p>Neutral: <StatCount>{neutral}</StatCount></p>
            </StatItem>

            <StatItem>
                <p>Bad: <StatCount>{bad}</StatCount></p>
            </StatItem>

            <StatItem>
                <p>Total: <StatCount>{total}</StatCount></p>
            </StatItem>

            <StatItem>
                <p>Positive Feedback: <StatCount>{positivePercentage}%</StatCount> </p>
            </StatItem>
        </Box>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};