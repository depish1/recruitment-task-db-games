import css from './InfoBox.module.scss';

interface IInfoBoxProps {
  text: string;
}

export const InfoBox = ({ text }: IInfoBoxProps) => <div className={css.infoBox}>{text}</div>;
