import { useRef, useState } from 'react';
import Card from '../../utils/card/Card';
import InputField from '../../utils/input_field/InputField';
import './Home.css';
import Priority from './sub_components/priority/Priority';
import Button from '../../utils/button/Button';
import RadioButton from '../../utils/radio_button/RadioButton';

const Home = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedPriority, setSelectedPriority] = useState<string>('high');
    const [highPriorityList, setHighPriorityList] = useState<string[]>([]);
    const [mediumPriorityList, setMediumPriorityList] = useState<string[]>([]);
    const [lowPriorityList, setLowPriorityList] = useState<string[]>([]);

    const handleAdd = () => {
        if (inputRef?.current?.value) {
            const task = inputRef.current.value;
            switch(selectedPriority) {
                case 'high':
                    setHighPriorityList(high => [...high, task]);
                    break;
                case 'medium':
                    setMediumPriorityList(medium => [...medium, task]);
                    break;
                case 'low':
                    setLowPriorityList(low => [...low, task]);
                    break;
            }
            inputRef.current.focus();
            inputRef.current.value = '';
        }
    }

    const handleOnEnter = () => {
        handleAdd();
    }

    const handleOnDeleteHighPriorityList = (index: number) => {
        const priorityList = [...highPriorityList];
        if (index > -1) {
            priorityList.splice(index, 1)
            setHighPriorityList(priorityList);
        }
    }

    const handleOnDeleteMediumPriorityList = (index: number) => {
        const priorityList = [...mediumPriorityList];
        if (index > -1) {
            priorityList.splice(index, 1)
            setMediumPriorityList(priorityList);
        }
    }

    const handleOnDeleteLowPriorityList = (index: number) => {
        const priorityList = [...lowPriorityList];
        if (index > -1) {
            priorityList.splice(index, 1)
            setLowPriorityList(priorityList);
        }
    }

    const handleRadioButtonChanged = (value: string) => {
        setSelectedPriority(value);
    }

    return (
        <div className='content_section'>
            <h1 className='content_title'>Todo App</h1>
            <div className='content_top'>
                <Card className='content_add'>
                    <div className='add_item'>
                        <InputField 
                            inputRef={inputRef}
                            onEnter={handleOnEnter}
                        />
                        <Button onClick={handleAdd}>
                            Add
                        </Button>
                    </div>
                    <div className='radio_buttons'>
                        <RadioButton 
                            id='high'
                            value='high'
                            label='High'
                            checked={selectedPriority === 'high'}
                            onChange={handleRadioButtonChanged}
                        />
                        <RadioButton
                            id='medium'
                            value='medium'
                            label='Medium'
                            checked={selectedPriority === 'medium'}
                            onChange={handleRadioButtonChanged}
                        />
                        <RadioButton
                            id='low'
                            value='low'
                            label='Low'
                            checked={selectedPriority === 'low'}
                            onChange={handleRadioButtonChanged}
                        />
                    </div>
                </Card>
            </div>
            <div className='content_bottom'>
                <Priority 
                    className='high_priority'
                    priorities={highPriorityList}
                    deleteItem={handleOnDeleteHighPriorityList}
                />
                <Priority
                    className='medium_priority'
                    priorities={mediumPriorityList}
                    deleteItem={handleOnDeleteMediumPriorityList}
                />
                <Priority
                    className='low_priority'
                    priorities={lowPriorityList}
                    deleteItem={handleOnDeleteLowPriorityList}
                />
            </div>
        </div>
    )

}

export default Home;