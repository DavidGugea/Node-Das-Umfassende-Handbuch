export function deleteAddress(addresses, id) {
    const parseId = parseInt(id, 10);
    const fileteredAddresses = addresses.filter(
        (address) => address.id !== parseId,
    );

    return fileteredAddresses;
}