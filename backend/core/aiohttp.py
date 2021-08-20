import aiohttp

_aiohttp_session = None


async def get_session():
    global _aiohttp_session
    if _aiohttp_session is None:
        _aiohttp_session = aiohttp.ClientSession()
    return _aiohttp_session
