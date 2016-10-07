import React, { PropTypes } from 'react';
import AutoComplete from 'react-autocomplete';
import { getOptions, matchOptionToTerm, sortOptions, styles } from '../../utils/utils';


const AutoCompleteElement = ({ auto, onChange, onSelect }) => (
  <div className="form-row">
    <label htmlFor="occupation">Occupation (optional)</label>
    <AutoComplete
      value={auto}
      onChange={onChange}
      inputProps={{ name: 'occupation', id: 'occupation', placeholder: 'Start typing...' }}
      items={getOptions()}
      getItemValue={item => item.name}
      shouldItemRender={matchOptionToTerm}
      sortItems={sortOptions}
      onSelect={onSelect}
      renderItem={(item, isHighlighted) => (
        <div
          style={isHighlighted ? styles.highlightedItem : styles.item}
          key={item.abbr}
        >{item.name}</div>
      )}
    />
  </div>
);

AutoCompleteElement.propTypes = {
  auto: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default AutoCompleteElement;
