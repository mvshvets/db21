import time


async def get_current_timestamp():
    """Текущее время в UNIX"""
    return int(time.time() * 1000)
