import styled from "styled-components";
import { FaSmileWink } from "react-icons/fa";
import Title from "../common/Title";
import { Link } from "react-router-dom";

interface Props {
    icon?: React.ReactNode;
    title: string;
    description?: React.ReactNode;
}

export default function Empty({ icon, title, description }: Props) {
    return (
        <EmptyStyle>
            {icon && <div className="icon">{icon}</div>}
            <Title size="large" color="secondary">
                {title}
            </Title>
            <p>
                {description && (<p>{description}</p>)}
            </p>
        </EmptyStyle>
    );
}

const EmptyStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 120px 0;

    .icon {
        svg {
            font-size: 4rem;
            fill: #ccc;
        }
    }
`;
