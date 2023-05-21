import Button from '../../../../utils/button/Button';
import Card from '../../../../utils/card/Card';
import './PriorityItem.css';

interface PriorityItemProps {
    task: string;
    onClick: () => void;
}

const PriorityItem: React.FC<PriorityItemProps> = ({task, onClick}) => {

    const handleOnDelete = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <Card className='item'>
            <p>{task}</p>
            <Button className='delete_button' onClick={handleOnDelete}>Delete</Button>
        </Card>
    )

}

export default PriorityItem;