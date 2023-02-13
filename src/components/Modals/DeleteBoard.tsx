import { IModal } from '../../data/type';
import { useAppDispatch } from '../../hooks/useRedux';
import { deleteBoard } from '../../reducer/dataSlice';
import { closeModal } from '../../reducer/modalSlice';
import Button from '../../standard/Button';
import Modal from '../../standard/Modal';

const DeleteBoard = (props: IModal) => {
  const { boardTab } = props;
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteBoard(boardTab));
    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <Modal>
      <div className='DeleteBoard'>
        <div className='DeleteBoard__topWrapper'>
          <h2 className='DeleteBoard__text-title'>Deletar este plano?</h2>
          <p className='DeleteBoard__text-info'>
            Tem certeza que deseja excluir o plano &apos;{boardTab}&apos; ? Essa ação removerá todas as colunas e tarefas deste plano.
          </p>
        </div>
        <div className='DeleteBoard__btnWrapper'>
          <Button small className='DeleteBoard__btn--delete' onClick={handleDelete}>
            Deletar
          </Button>
          <Button small className='DeleteBoard__btn--cancel' onClick={handleCancel}>
            Cancelar
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteBoard;