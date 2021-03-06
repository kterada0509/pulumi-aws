# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from . import utilities, tables

class GetAmiIdsResult:
    """
    A collection of values returned by getAmiIds.
    """
    def __init__(__self__, ids=None, id=None):
        if ids and not isinstance(ids, list):
            raise TypeError('Expected argument ids to be a list')
        __self__.ids = ids
        if id and not isinstance(id, str):
            raise TypeError('Expected argument id to be a str')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_ami_ids(executable_users=None,filters=None,name_regex=None,owners=None,sort_ascending=None,opts=None):
    """
    Use this data source to get a list of AMI IDs matching the specified criteria.
    """
    __args__ = dict()

    __args__['executableUsers'] = executable_users
    __args__['filters'] = filters
    __args__['nameRegex'] = name_regex
    __args__['owners'] = owners
    __args__['sortAscending'] = sort_ascending
    __ret__ = await pulumi.runtime.invoke('aws:index/getAmiIds:getAmiIds', __args__, opts=opts)

    return GetAmiIdsResult(
        ids=__ret__.get('ids'),
        id=__ret__.get('id'))
