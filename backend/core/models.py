from typing import TypeVar, Generic

from pydantic.generics import GenericModel

DataT = TypeVar('DataT')


class BaseSearchResponseModel(GenericModel, Generic[DataT]):
    items: list[DataT]
    total: int
