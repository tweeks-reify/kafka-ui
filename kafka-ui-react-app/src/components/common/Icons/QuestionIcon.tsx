import React from 'react';
import { useTheme } from 'styled-components';

const QuestionIcon: React.FC = () => {
  const theme = useTheme();
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.5" cy="9.5" r="8.5" stroke="#5C5CF6" strokeWidth="2" />
      <path
        d="M8.31818 11.2727V11.0682C8.31818 10.5994 8.35511 10.2259 8.42898 9.94744C8.50284 9.66903 8.61222 9.44602 8.7571 9.27841C8.90199 9.10795 9.07955 8.95455 9.28977 8.81818C9.47159 8.69886 9.63352 8.58381 9.77557 8.47301C9.92045 8.36222 10.0341 8.24432 10.1165 8.11932C10.2017 7.99432 10.2443 7.85227 10.2443 7.69318C10.2443 7.55114 10.2102 7.42614 10.142 7.31818C10.0739 7.21023 9.98153 7.12642 9.86506 7.06676C9.74858 7.0071 9.61932 6.97727 9.47727 6.97727C9.32386 6.97727 9.18182 7.01278 9.05114 7.08381C8.9233 7.15483 8.8196 7.25284 8.74006 7.37784C8.66335 7.50284 8.625 7.64773 8.625 7.8125H6.44318C6.44886 7.1875 6.59091 6.6804 6.86932 6.29119C7.14773 5.89915 7.51705 5.61222 7.97727 5.4304C8.4375 5.24574 8.94318 5.15341 9.49432 5.15341C10.1023 5.15341 10.6449 5.2429 11.1222 5.42188C11.5994 5.59801 11.9759 5.86506 12.2514 6.22301C12.527 6.57812 12.6648 7.02273 12.6648 7.55682C12.6648 7.90057 12.6051 8.20312 12.4858 8.46449C12.3693 8.72301 12.206 8.9517 11.9957 9.15057C11.7884 9.34659 11.5455 9.52557 11.267 9.6875C11.0625 9.80682 10.8906 9.9304 10.7514 10.0582C10.6122 10.1832 10.5071 10.3267 10.4361 10.4886C10.3651 10.6477 10.3295 10.8409 10.3295 11.0682V11.2727H8.31818ZM9.35795 14.1364C9.02841 14.1364 8.74574 14.0213 8.50994 13.7912C8.27699 13.5582 8.16193 13.2756 8.16477 12.9432C8.16193 12.6193 8.27699 12.3423 8.50994 12.1122C8.74574 11.8821 9.02841 11.767 9.35795 11.767C9.67045 11.767 9.94602 11.8821 10.1847 12.1122C10.4261 12.3423 10.5483 12.6193 10.5511 12.9432C10.5483 13.1648 10.4901 13.3665 10.3764 13.5483C10.2656 13.7273 10.1207 13.8707 9.94176 13.9787C9.76278 14.0838 9.56818 14.1364 9.35795 14.1364Z"
        fill={theme.icons.savedIcon}
      />
    </svg>
  );
};

export default QuestionIcon;