import PriorityItem from '../priority_item/PriorityItem';
import './Priority.css';

interface PriorityProps {
    className?: string;
    priorities: string[];
    deleteItem: (index: number) => void;
}

const Priority: React.FC<PriorityProps> = ({className, priorities, deleteItem}) => {

    const classes = `priority ${className}`;

    const handleOnDelete = (index: number) => {
        deleteItem(index);
    }

    return (
        <div className={classes}>
            {
                priorities.map((priority, key) => {
                    return (
                        <PriorityItem 
                            task={priority}
                            key={key}
                            onClick={() => handleOnDelete(key)}
                        />
                    )
                })
            }
        </div>
    )

}

export default Priority;