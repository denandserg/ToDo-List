import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, InjectedFormProps } from 'redux-form';

import ApiSelectors from '../../../redux/selectors';
import enhance from './enhance';
import sm from './styles.module.scss';

interface _Props extends Props, InjectedFormProps {}

interface Props {}

const SelectProjectField = enhance<_Props, Props>(_SelectProjectField);

export default SelectProjectField;

function _SelectProjectField(props: _Props) {
  const dispatch = useDispatch();

  const { handleSubmit } = props;

  const getAllProject = useSelector(ApiSelectors.allProjects);

  function handleSelectCurrentProject(data: Record<string, string>) {
    const currentProject = getAllProject.filter(
      (project: Project) => project.name === data.selectProjectField
    );
    Promise.resolve(
      dispatch({
        type: 'CURRENT_PROJECT',
        payload: currentProject[0]
      })
    );
  }

  return (
    <div className={sm.SelectProjectField}>
      <form className={sm.SelectProjectField_Form} onSubmit={handleSubmit}>
        <div className={sm.SelectProjectField_Title}>Current project: </div>
        <Field
          name="selectProjectField"
          component="select"
          className={sm.SelectProjectField_Select}
          type="submit"
          onChange={() =>
            setTimeout(handleSubmit(handleSelectCurrentProject), 0)
          }
        >
          {getAllProject.map((el: Project) => (
            <option key={el.id}>{el.name}</option>
          ))}
        </Field>
      </form>
    </div>
  );
}
